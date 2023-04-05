<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAlEzNwsA4-uWon-o2BBO5KdI5ft91SKb4",
    authDomain: "react-project-first-7f818.firebaseapp.com",
    projectId: "react-project-first-7f818",
    storageBucket: "react-project-first-7f818.appspot.com",
    messagingSenderId: "44902427677",
    appId: "1:44902427677:web:8ad1cc20f6f4ad01f46af4",
    measurementId: "G-LSGSRS33R5"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>