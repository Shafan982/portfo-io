function toggleText(button) {
    var paragraph = button.previousElementSibling;
    if (paragraph.classList.contains('show-more')) {
        paragraph.classList.remove('show-more');
        button.textContent = "Read More";
    } else {
        paragraph.classList.add('show-more');
        button.textContent = "Read Less";
    }
}

function expandText(card) {
    var button = card.querySelector('.read-more-btn');
    var paragraph = button.previousElementSibling;
    
    if (!paragraph.classList.contains('show-more')) {
        paragraph.classList.add('show-more'); // Ensure it expands
        button.textContent = "Read Less"; // Change button text
    }
}

function collapseText(card) {
    var button = card.querySelector('.read-more-btn');
    var paragraph = button.previousElementSibling;
    
    if (paragraph.classList.contains('show-more')) {
        paragraph.classList.remove('show-more'); // Collapse the text
        button.textContent = "Read More"; // Change button text
    }
}

function toggleDetail(id) {
    const detailElement = document.getElementById(id);
    if (detailElement.classList.contains('d-none')) {
      detailElement.classList.remove('d-none');
    } else {
      detailElement.classList.add('d-none');
    }
  }