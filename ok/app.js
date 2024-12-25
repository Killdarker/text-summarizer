function summarizeText() {
  const inputText = document.getElementById('input-text').value;

  if (inputText.trim() === '') {
    alert("Please enter some text to summarize.");
    return;
  }

  // Preprocess the text: split it into sentences
  const sentences = inputText.split(/[.?!]\s+/);  // Split by sentence-ending punctuation (period, question mark, exclamation mark)

  if (sentences.length < 3) {
    alert("Please enter more than 2 sentences for summarization.");
    return;
  }

  // Enhance summary with a simple sentence scoring function
  const summary = enhancedSummarizer(sentences);
  
  // Display the summary in the designated div
  document.getElementById('summarized-text').textContent = summary;
}

// Enhanced summarizer using a scoring system
function enhancedSummarizer(sentences) {
  // Calculate sentence scores (for simplicity, we'll use sentence length as the score)
  const sentenceScores = sentences.map(sentence => {
    return {
      sentence: sentence,
      score: sentence.split(' ').length // Score based on number of words in the sentence
    };
  });

  // Sort sentences by score (longer sentences are likely more important)
  sentenceScores.sort((a, b) => b.score - a.score);

  // Select the top 3 sentences based on score
  const numberOfSentences = 3;
  const summary = sentenceScores.slice(0, numberOfSentences).map(item => item.sentence).join(' ');

  return summary;
}
