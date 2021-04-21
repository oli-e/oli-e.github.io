const dreamsData = document.querySelector('#dreams-list');

function showDream(doc){
  let li = document.createElement('li');
  let date = document.createElement('span');
  let type = document.createElement('span');
  let content = document.createElement('span');

  li.setAttribute('data', doc.id);
  date.textContent = doc.data().date;
  type.textContent = doc.data().type;
  content.textContent = doc.data().content;

  li.appendChild(date);
  li.appendChild(type);
  li.appendChild(content);

  li.classList.add('list-group-item');
  dreamsData.appendChild(li);
}

db.collection('Dreams').get().then((snapshot) => {
	snapshot.docs.forEach(doc => {
		showDream(doc);
	})
})