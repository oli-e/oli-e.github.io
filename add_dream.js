    const form = document.querySelector('#dream-form');

    form.addEventListener('submit', (e) => {
      // e.preventDefault();
      db.collection('Dreams').doc().set({
        date: form.data.value.toString(),
        type: form.dreamType.value,
        content: form.dreamcontent.value
      }).catch(e => {
          console.log(e.message);
          // console.log(form.data.value.toString(), form.dreamType.value, form.dreamcontent.value);
        
        });
      
    });