const quotes = [
    {
      text: "Talk is cheap. Show me the code.",
      author: "Linus Torvalds"
    },
    {
      text: "Programs must be written for people to read, and only incidentally for machines to execute.",
      author: "Harold Abelson"
    },
    {
      text: "First, solve the problem. Then, write the code.",
      author: "John Johnson"
    },
    {
      text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      author: "Martin Fowler"
    },
    {
      text: "Code is like humor. When you have to explain it, it’s bad.",
      author: "Cory House"
    },
    {
      text: "Experience is the name everyone gives to their mistakes.",
      author: "Oscar Wilde"
    }
  ];

  let quoteIndex = 0;
  const quoteBox = document.getElementById("quote-box");

  setInterval(() => {
    quoteIndex = (quoteIndex + 1) % quotes.length;
    quoteBox.classList.remove("opacity-100");
    quoteBox.classList.add("opacity-0");

    setTimeout(() => {
      quoteBox.innerHTML = `“${quotes[quoteIndex].text}”<footer class="mt-4 text-sm text-gray-500">– ${quotes[quoteIndex].author}</footer>`;
      quoteBox.classList.remove("opacity-0");
      quoteBox.classList.add("opacity-100");
    }, 300);
  }, 5000); // changes every 5 seconds

