export interface Patient {
  // Make these OPTIONAL since they come from auth
  uid?: string;
  email?: string;
  
  // Rest of your fields remain the same
  personalInfo: {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    gender: 'male' | 'female' | 'other' | 'prefer-not-to-say';
    phoneNumber: string;
    emergencyContact: {
      name: string;
      relationship: string;
      phoneNumber: string;
    };
  };
  
  medicalInfo: {
    bloodType: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-' | 'unknown';
    height: number;
    weight: number;
    allergies: string[];
    currentMedications: {
      name: string;
      dosage: string;
      frequency: string;
    }[];
    chronicConditions: string[];
    pastSurgeries: {
      name: string;
      year: number;
    }[];
  };
  
  insuranceInfo: {
    providerName: string;
    policyNumber: string;
    groupNumber?: string;
    insuranceType: 'private' | 'employer' | 'government' | 'other';
    validUntil: string;
    coverageDetails?: string;
  };
  
  identification: {
    type: 'national-id' | 'passport' | 'driving-license';
    number: string;
    issueDate: string;
    expiryDate?: string;
    fileUrl?: string;
  };
  
  doctorInfo?: {
    primaryPhysician: {
      name: string;
      clinic: string;
      phoneNumber: string;
    };
    specialists: {
      name: string;
      specialty: string;
      clinic: string;
    }[];
  };
  
  preferences: {
    notifications: boolean;
    dataSharing: boolean;
    language: string;
  };
  
  createdAt: Date;
  updatedAt: Date;
  onboardingCompleted: boolean;
}