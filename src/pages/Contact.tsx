
import { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent! ✨",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      category: '',
      message: ''
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="page-header">Contact Us</h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Have a question, story suggestion, or just want to share your thoughts? 
            We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg border-stone-200">
              <CardHeader>
                <CardTitle className="font-fairy text-2xl gradient-text">Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        required
                        placeholder="Your full name"
                        className="border-stone-300 focus:border-enchanted-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        required
                        placeholder="your@email.com"
                        className="border-stone-300 focus:border-enchanted-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select value={formData.category} onValueChange={(value) => handleChange('category', value)}>
                      <SelectTrigger className="border-stone-300 focus:border-enchanted-500">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="story-suggestion">Story Suggestion</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                        <SelectItem value="collaboration">Collaboration</SelectItem>
                        <SelectItem value="technical">Technical Issue</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => handleChange('subject', e.target.value)}
                      required
                      placeholder="Brief description of your message"
                      className="border-stone-300 focus:border-enchanted-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      required
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      className="border-stone-300 focus:border-enchanted-500 resize-none"
                    />
                  </div>

                  <Button type="submit" className="magical-btn w-full">
                    Send Message ✨
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="shadow-lg border-stone-200">
              <CardHeader>
                <CardTitle className="font-fairy text-xl gradient-text">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-stone-800 mb-2">Response Time</h3>
                  <p className="text-stone-600 text-sm">
                    We typically respond to all inquiries within 24 hours.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-stone-800 mb-2">Story Submissions</h3>
                  <p className="text-stone-600 text-sm">
                    Have a magical tale to share? We'd love to hear your story ideas and consider them for our collection.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-stone-800 mb-2">Collaborations</h3>
                  <p className="text-stone-600 text-sm">
                    Interested in working with us? Reach out to discuss partnership opportunities.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-stone-200 bg-gradient-to-br from-enchanted-50 to-golden-50">
              <CardHeader>
                <CardTitle className="font-fairy text-xl gradient-text">Quick Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-stone-700">
                  <li>• Be specific about your inquiry for faster responses</li>
                  <li>• Include relevant details if reporting technical issues</li>
                  <li>• Story suggestions should include a brief synopsis</li>
                  <li>• Check our FAQ section for common questions</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
