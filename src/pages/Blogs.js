import React, { useState } from 'react';
import "../styles/Blogs.css"

const Blogs = () => {
    const [status, setStatus] = useState('');
    const [submitButtonText, setSubmitButtonText] = useState('Submit Blog Post');

    // IMPORTANT: You will get this URL from your Getform.io dashboard.
    const GETFORM_ENDPOINT = "https://getform.io/f/apjzzgea";

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const form = event.target;
        const formData = new FormData(form);

        setStatus('');
        setSubmitButtonText('Submitting...');

        try {
            const response = await fetch(GETFORM_ENDPOINT, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json' // Important to get a JSON response
                },
            });

            const result = await response.json();

            if (response.ok && result.success) {
                setStatus('Blog submitted successfully! Thank you.');
                form.reset();
            } else {
                setStatus(`Error: ${result.message || 'An unknown error occurred.'}`);
            }
        } catch (error) {
            console.error('Submission error:', error);
            // This catches network errors and cases where the response isn't valid JSON
            setStatus('An error occurred. Please check the console and try again.');
        } finally {
            setSubmitButtonText('Submit Blog Post');
        }
    };

    return (
        <>
            
            <div className="blogs-page-container">
                <div className="form-container">
                    <h2 className="form-title">Submit a New Blog Post</h2>
                    
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <div className="form-grid">
                            <div className="form-field">
                                <label htmlFor="name" className="form-label">Author Name</label>
                                <input type="text" id="name" name="name" required className="form-input" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="email" className="form-label">Author Email</label>
                                <input type="email" id="email" name="email" required className="form-input" />
                            </div>
                        </div>

                        <div className="form-field-full">
                            <label htmlFor="heading" className="form-label">Blog Title / Heading</label>
                            <input type="text" id="heading" name="heading" required className="form-input" />
                        </div>

                        <div className="form-field-full">
                            <label htmlFor="content" className="form-label">Blog Content</label>
                            <textarea id="content" name="content" rows="10" required className="form-textarea"></textarea>
                        </div>
                        
                        <div className="form-field-full attachment-field">
                            <label htmlFor="attachment" className="form-label">Attach File (Image, PDF, DOC)</label>
                            <input type="file" id="attachment" name="attachment" accept=".jpg, .jpeg, .png, .pdf, .doc, .docx" className="form-file-input" />
                        </div>

                        <div>
                            <button type="submit" disabled={submitButtonText === 'Submitting...'} className="submit-button">
                                {submitButtonText}
                            </button>
                        </div>

                        {status && (
                            <p className={`status-message ${status.startsWith('Error') ? 'status-error' : 'status-success'}`}>
                                {status}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </>
    );
};

export default Blogs;

