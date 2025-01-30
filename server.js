import app from './app.js';



const PORT = process.env.PORT || 5000; // Default to 5000 if PORT is not defined
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); // Fixed interpolation syntax
});
