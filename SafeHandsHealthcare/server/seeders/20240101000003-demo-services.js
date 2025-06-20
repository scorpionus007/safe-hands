'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('services', [
      // Home Care Services
      {
        id: '770e8400-e29b-41d4-a716-446655440001',
        name: 'Personal Care Assistant',
        description: 'Professional personal care assistance including bathing, dressing, and grooming',
        categoryId: '660e8400-e29b-41d4-a716-446655440001',
        basePrice: 800.00,
        priceType: 'hourly',
        duration: 60,
        isActive: true,
        requirements: ['Professional certification', 'Background check', 'Experience with elderly'],
        includedServices: ['Personal hygiene', 'Dressing assistance', 'Mobility support'],
        sortOrder: 1,
        tags: ['personal care', 'elderly', 'assistance'],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '770e8400-e29b-41d4-a716-446655440002',
        name: 'Home Nursing Care',
        description: 'Professional nursing care at home including medication management and health monitoring',
        categoryId: '660e8400-e29b-41d4-a716-446655440001',
        basePrice: 1200.00,
        priceType: 'hourly',
        duration: 60,
        isActive: true,
        requirements: ['Registered Nurse', 'Valid license', 'Home care experience'],
        includedServices: ['Medication management', 'Vital signs monitoring', 'Wound care'],
        sortOrder: 2,
        tags: ['nursing', 'medical', 'health monitoring'],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '770e8400-e29b-41d4-a716-446655440003',
        name: 'Companionship Care',
        description: 'Companionship and emotional support for elderly individuals',
        categoryId: '660e8400-e29b-41d4-a716-446655440001',
        basePrice: 600.00,
        priceType: 'hourly',
        duration: 60,
        isActive: true,
        requirements: ['Patience', 'Good communication skills', 'Elderly care experience'],
        includedServices: ['Conversation', 'Activities', 'Emotional support'],
        sortOrder: 3,
        tags: ['companionship', 'elderly', 'emotional support'],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
      // Medical Services
      {
        id: '770e8400-e29b-41d4-a716-446655440004',
        name: 'Doctor Home Visit',
        description: 'Professional doctor consultation at your home',
        categoryId: '660e8400-e29b-41d4-a716-446655440002',
        basePrice: 1500.00,
        priceType: 'fixed',
        duration: 30,
        isActive: true,
        requirements: ['MBBS degree', 'Valid medical license', 'Home visit experience'],
        includedServices: ['Health consultation', 'Prescription', 'Basic examination'],
        sortOrder: 1,
        tags: ['doctor', 'consultation', 'home visit'],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '770e8400-e29b-41d4-a716-446655440005',
        name: 'Physiotherapy',
        description: 'Professional physiotherapy sessions at home',
        categoryId: '660e8400-e29b-41d4-a716-446655440002',
        basePrice: 1000.00,
        priceType: 'hourly',
        duration: 60,
        isActive: true,
        requirements: ['Physiotherapy degree', 'Valid license', 'Home therapy experience'],
        includedServices: ['Assessment', 'Exercise therapy', 'Manual therapy'],
        sortOrder: 2,
        tags: ['physiotherapy', 'rehabilitation', 'exercise'],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '770e8400-e29b-41d4-a716-446655440006',
        name: 'Health Monitoring',
        description: 'Regular health monitoring and vital signs tracking',
        categoryId: '660e8400-e29b-41d4-a716-446655440002',
        basePrice: 800.00,
        priceType: 'hourly',
        duration: 30,
        isActive: true,
        requirements: ['Nursing qualification', 'Monitoring experience'],
        includedServices: ['Blood pressure', 'Temperature', 'Pulse rate', 'Oxygen saturation'],
        sortOrder: 3,
        tags: ['health monitoring', 'vital signs', 'tracking'],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
      // Child Care Services
      {
        id: '770e8400-e29b-41d4-a716-446655440007',
        name: 'Babysitting',
        description: 'Professional babysitting services for children of all ages',
        categoryId: '660e8400-e29b-41d4-a716-446655440003',
        basePrice: 500.00,
        priceType: 'hourly',
        duration: 60,
        isActive: true,
        requirements: ['Child care certification', 'Background check', 'First aid training'],
        includedServices: ['Child supervision', 'Basic care', 'Activities'],
        sortOrder: 1,
        tags: ['babysitting', 'child care', 'supervision'],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '770e8400-e29b-41d4-a716-446655440008',
        name: 'Child Development Specialist',
        description: 'Specialized child development and educational activities',
        categoryId: '660e8400-e29b-41d4-a716-446655440003',
        basePrice: 800.00,
        priceType: 'hourly',
        duration: 60,
        isActive: true,
        requirements: ['Child development degree', 'Teaching experience'],
        includedServices: ['Educational activities', 'Development assessment', 'Learning support'],
        sortOrder: 2,
        tags: ['child development', 'education', 'learning'],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
      // Elderly Care Services
      {
        id: '770e8400-e29b-41d4-a716-446655440009',
        name: 'Elderly Care Specialist',
        description: 'Specialized care for elderly with medical conditions',
        categoryId: '660e8400-e29b-41d4-a716-446655440004',
        basePrice: 1000.00,
        priceType: 'hourly',
        duration: 60,
        isActive: true,
        requirements: ['Geriatric care certification', 'Medical background'],
        includedServices: ['Medical monitoring', 'Personal care', 'Medication management'],
        sortOrder: 1,
        tags: ['elderly care', 'geriatric', 'medical'],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
      // Post-Surgery Care
      {
        id: '770e8400-e29b-41d4-a716-446655440010',
        name: 'Post-Surgery Recovery Care',
        description: 'Comprehensive post-operative care and recovery support',
        categoryId: '660e8400-e29b-41d4-a716-446655440005',
        basePrice: 1200.00,
        priceType: 'hourly',
        duration: 60,
        isActive: true,
        requirements: ['Nursing qualification', 'Post-op care experience'],
        includedServices: ['Wound care', 'Medication management', 'Recovery monitoring'],
        sortOrder: 1,
        tags: ['post-surgery', 'recovery', 'wound care'],
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('services', null, {});
  }
}; 