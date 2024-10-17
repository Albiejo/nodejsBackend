const request = require('supertest');
const express = require('express');
const app = require('../server')


// Test suite for the Home route
describe('GET /', () => {
    it('should return Welcome to the Home Page!', async () => {
      const res = await request(app).get('/');
      expect(res.statusCode).toBe(200);
      expect(res.text).toBe('Welcome to the Home Page!');
    });
  });
  
  // Test suite for the About route
  describe('GET /about', () => {
    it('should return This is the About Page!', async () => {
      const res = await request(app).get('/about');
      expect(res.statusCode).toBe(200);
      expect(res.text).toBe('This is the About Page!');
    });
  });
  
  // Test suite for the Contact route
  describe('GET /contact', () => {
    it('should return Contact us at contact@example.com', async () => {
      const res = await request(app).get('/contact');
      expect(res.statusCode).toBe(200);
      expect(res.text).toBe('Contact us at contact@example.com');
    });
  });