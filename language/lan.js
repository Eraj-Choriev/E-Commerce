// English text
const englishText = {
    heading: "Hello World!",
    intro: "This is a simple web page.",
    button: "Change Language"
  };
  
  // Spanish text
  const spanishText = {
    heading: "¡Hola Mundo!",
    intro: "Esta es una página web simple.",
    button: "Cambiar Idioma"
  };
  
  // Function to update text content based on language
  function updateTextContent(language) {
    const text = language === 'en' ? englishText : spanishText;
    document.getElementById('heading').textContent = text.heading;
    document.getElementById('intro').textContent = text.intro;
    document.getElementById('change-language-btn').textContent = text.button;
  }
  
  // Initial language is English
  let currentLanguage = 'en';
  updateTextContent(currentLanguage);
  
  // Event listener for button click to change language
  document.getElementById('change-language-btn').addEventListener('click', function() {
    currentLanguage = currentLanguage === 'en' ? 'es' : 'en';
    updateTextContent(currentLanguage);
  });
  