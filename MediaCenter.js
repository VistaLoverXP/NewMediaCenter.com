document.querySelectorAll('.title').forEach(el => {
  el.addEventListener('click', () => {
    document.querySelectorAll('.title').forEach(t => t.classList.remove('selected'));
    el.classList.add('selected');
  });
});

document.getElementById('searchBar').addEventListener('input', function() {
  let filter = this.value.toLowerCase();
  document.querySelectorAll('.title').forEach(title => {
    title.style.display = title.textContent.toLowerCase().includes(filter) ? 'block' : 'none';
  });
});
