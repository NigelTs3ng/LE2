import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const DocumentUploadForm = ({ formData, onFormChange, errors }) => {
  const [dragOver, setDragOver] = useState(null);
  const [uploadProgress, setUploadProgress] = useState({});

  const requiredDocuments = [
    {
      id: 'passport',
      name: 'Passport (Photo Page)',
      description: 'Clear photo of your passport main page',
      icon: 'FileText',
      required: true,
      formats: ['JPG', 'PNG', 'PDF']
    },
    {
      id: 'resume',
      name: 'Resume/CV',
      description: 'Your updated resume in English',
      icon: 'FileText',
      required: true,
      formats: ['PDF', 'DOC', 'DOCX']
    },
    {
      id: 'certificates',
      name: 'Certificates/Qualifications',
      description: 'Educational and professional certificates',
      icon: 'Award',
      required: false,
      formats: ['JPG', 'PNG', 'PDF']
    },
    {
      id: 'experience',
      name: 'Work Experience Letters',
      description: 'Letters from previous employers',
      icon: 'Briefcase',
      required: false,
      formats: ['JPG', 'PNG', 'PDF']
    },
    {
      id: 'photo',
      name: 'Passport-sized Photo',
      description: 'Recent passport-sized photograph',
      icon: 'Camera',
      required: true,
      formats: ['JPG', 'PNG']
    }
  ];

  const handleFileSelect = (documentId, files) => {
    const file = files?.[0];
    if (!file) return;

    // Simulate upload progress
    setUploadProgress(prev => ({ ...prev, [documentId]: 0 }));
    
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        const currentProgress = prev?.[documentId] || 0;
        if (currentProgress >= 100) {
          clearInterval(interval);
          // Update form data
          const updatedDocuments = {
            ...formData?.documents,
            [documentId]: {
              file: file,
              name: file?.name,
              size: file?.size,
              uploadedAt: new Date()?.toISOString()
            }
          };
          onFormChange({ ...formData, documents: updatedDocuments });
          return prev;
        }
        return { ...prev, [documentId]: currentProgress + 10 };
      });
    }, 100);
  };

  const handleDragOver = (e, documentId) => {
    e?.preventDefault();
    setDragOver(documentId);
  };

  const handleDragLeave = (e) => {
    e?.preventDefault();
    setDragOver(null);
  };

  const handleDrop = (e, documentId) => {
    e?.preventDefault();
    setDragOver(null);
    const files = Array.from(e?.dataTransfer?.files);
    handleFileSelect(documentId, files);
  };

  const removeDocument = (documentId) => {
    const updatedDocuments = { ...formData?.documents };
    delete updatedDocuments?.[documentId];
    onFormChange({ ...formData, documents: updatedDocuments });
    
    const updatedProgress = { ...uploadProgress };
    delete updatedProgress?.[documentId];
    setUploadProgress(updatedProgress);
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i))?.toFixed(2)) + ' ' + sizes?.[i];
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-text-primary mb-2">
          Document Upload
        </h2>
        <p className="text-text-secondary">
          Upload your documents for verification. All files are encrypted and secure.
        </p>
      </div>
      <div className="space-y-6">
        {requiredDocuments?.map((doc) => {
          const isUploaded = formData?.documents?.[doc?.id];
          const progress = uploadProgress?.[doc?.id];
          const isUploading = progress !== undefined && progress < 100;

          return (
            <div key={doc?.id} className="bg-white border border-border rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    isUploaded ? 'bg-success/10 text-success' : 'bg-muted text-text-muted'
                  }`}>
                    <Icon name={isUploaded ? 'CheckCircle' : doc?.icon} size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-text-primary flex items-center space-x-2">
                      <span>{doc?.name}</span>
                      {doc?.required && (
                        <span className="text-xs bg-destructive text-white px-2 py-0.5 rounded">
                          Required
                        </span>
                      )}
                    </h3>
                    <p className="text-sm text-text-secondary mt-1">{doc?.description}</p>
                    <p className="text-xs text-text-muted mt-1">
                      Supported formats: {doc?.formats?.join(', ')} • Max size: 10MB
                    </p>
                  </div>
                </div>
                
                {isUploaded && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeDocument(doc?.id)}
                    iconName="Trash2"
                    className="text-destructive hover:text-destructive"
                  />
                )}
              </div>
              {isUploaded ? (
                <div className="bg-success/5 border border-success/20 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Icon name="File" size={16} className="text-success" />
                      <div>
                        <p className="text-sm font-medium text-text-primary">
                          {isUploaded?.name}
                        </p>
                        <p className="text-xs text-text-muted">
                          {formatFileSize(isUploaded?.size)} • Uploaded successfully
                        </p>
                      </div>
                    </div>
                    <Icon name="CheckCircle" size={20} className="text-success" />
                  </div>
                </div>
              ) : (
                <div
                  className={`border-2 border-dashed rounded-lg p-6 text-center transition-all duration-200 ${
                    dragOver === doc?.id
                      ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
                  }`}
                  onDragOver={(e) => handleDragOver(e, doc?.id)}
                  onDragLeave={handleDragLeave}
                  onDrop={(e) => handleDrop(e, doc?.id)}
                >
                  {isUploading ? (
                    <div className="space-y-3">
                      <Icon name="Upload" size={32} className="text-primary mx-auto animate-pulse" />
                      <div>
                        <p className="text-sm font-medium text-text-primary">Uploading...</p>
                        <div className="w-full bg-muted rounded-full h-2 mt-2">
                          <div
                            className="bg-primary h-2 rounded-full transition-all duration-300"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                        <p className="text-xs text-text-muted mt-1">{progress}% complete</p>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <Icon name="Upload" size={32} className="text-text-muted mx-auto" />
                      <div>
                        <p className="text-sm font-medium text-text-primary">
                          Drop files here or click to browse
                        </p>
                        <p className="text-xs text-text-muted">
                          {doc?.formats?.join(', ')} files up to 10MB
                        </p>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-2 justify-center">
                        <Button
                          variant="outline"
                          size="sm"
                          iconName="Upload"
                          iconPosition="left"
                          onClick={() => {
                            const input = document.createElement('input');
                            input.type = 'file';
                            input.accept = doc?.formats?.map(f => `.${f?.toLowerCase()}`)?.join(',');
                            input.onchange = (e) => handleFileSelect(doc?.id, e?.target?.files);
                            input?.click();
                          }}
                        >
                          Browse Files
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          iconName="Camera"
                          iconPosition="left"
                          onClick={() => {
                            const input = document.createElement('input');
                            input.type = 'file';
                            input.accept = 'image/*';
                            input.capture = 'environment';
                            input.onchange = (e) => handleFileSelect(doc?.id, e?.target?.files);
                            input?.click();
                          }}
                        >
                          Take Photo
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="bg-surface p-4 rounded-lg">
        <div className="flex items-start space-x-3">
          <Icon name="Shield" size={20} className="text-trust mt-0.5" />
          <div>
            <h4 className="font-medium text-text-primary mb-1">Document Security</h4>
            <p className="text-sm text-text-secondary">
              All uploaded documents are encrypted with 256-bit SSL encryption and stored securely. 
              We comply with Singapore's Personal Data Protection Act (PDPA) and only share documents 
              with verified employers upon your consent.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentUploadForm;