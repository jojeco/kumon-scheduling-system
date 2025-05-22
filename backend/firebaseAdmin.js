import admin from 'firebase-admin';

// You will need to add your own service account credentials
// For development, you can use a service account key file downloaded from Firebase console
// For production, use environment variables or secret management services
try {
  // Check if the admin app has already been initialized
  admin.app();
} catch (error) {
  // Initialize the app if it hasn't been initialized yet
  admin.initializeApp({
    // You can uncomment and use one of these methods:
    
    // 1. Using a service account key file:
    // credential: admin.credential.cert('./path-to-service-account-key.json'),
    
    // 2. Using environment variables:
    // credential: admin.credential.cert({
    //   projectId: process.env.FIREBASE_PROJECT_ID,
    //   clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    //   privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    // }),
    
    // 3. For development on GCP or Firebase hosting, use application default credentials:
    // credential: admin.credential.applicationDefault(),

    // If you're using Firebase Realtime Database, uncomment this:
    // databaseURL: "https://YOUR-PROJECT-ID.firebaseio.com"
  });
}

export default admin;

