import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import HomePage from '@/pages/HomePage';
import BlogPage from '@/pages/BlogPage';
import BlogPostDetail from '@/pages/BlogPostDetail';
import CoursesPage from '@/pages/CoursesPage';
import CourseDetail from '@/pages/CourseDetail';
import SavedCoursesPage from '@/pages/SavedCoursesPage';
import AdminPage from '@/pages/AdminPage';
import AdminLoginPage from '@/pages/AdminLoginPage';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import { SavedCoursesProvider } from '@/context/SavedCoursesContext';
import { AdminProvider } from '@/context/AdminContext';
import { AuthProvider } from '@/context/AuthContext';
import ProtectedRoute from '@/components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AdminProvider>
          <SavedCoursesProvider>
            <div className="min-h-screen bg-slate-900">
              <Navigation />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:id" element={<BlogPostDetail />} />
                <Route path="/courses" element={<CoursesPage />} />
                <Route path="/courses/:id" element={<CourseDetail />} />
                <Route path="/saved-courses" element={<SavedCoursesPage />} />
                <Route path="/admin/login" element={<AdminLoginPage />} />
                <Route 
                  path="/admin" 
                  element={
                    <ProtectedRoute>
                      <AdminPage />
                    </ProtectedRoute>
                  } 
                />
              </Routes>
              <Footer />
              <Toaster />
            </div>
          </SavedCoursesProvider>
        </AdminProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;