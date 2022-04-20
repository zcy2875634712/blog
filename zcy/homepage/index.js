document.querySelector('#adder').style.display = 'none';
showBookmark();

function search() {
  let url = document.querySelector("input[name='engine']:checked").value;
  let key = document.querySelector("#key").value;
  window.open(url + key);
}

function show() {
  let bm = document.querySelector('#adder');
  if (bm.style.display == 'none') {
    bm.style.display = 'block';
  } else {
    bm.style.display = 'none';
  }
}

function addBookmark() {
  let name = document.querySelector('#name').value;
  let url = document.querySelector('#url').value;

  if (!localStorage.getItem('bookmark')) {
    localStorage.setItem('bookmark', '[]')
  }

  let obj = JSON.parse(localStorage.getItem('bookmark'));
  obj.push({
    'name': name,
    'url': url
  });
  localStorage.setItem('bookmark', JSON.stringify(obj));
  location.reload();
}

function showBookmark() {
  let obj = JSON.parse(localStorage.getItem('bookmark'));
  for (let i = 0; i < obj.length; i++) {
    let name = obj[i]['name'];
    let url = obj[i]['url'];
    let bm = document.querySelector('#bookmark');
    let domain = url.match(/http.?:\/\/[^/]+/);
    if (domain == null)
      imgsrc = 'https://cn.bing.com/favicon.ico';
    else
      imgsrc = domain + '/favicon.ico';
    bm.innerHTML = `<div><img src='${imgsrc}'><a href='${url}'>${name}</a><button type='button' onclick='removeBookmark("${name}");'>x</button></div>` + bm.innerHTML;
  }
}

function removeBookmark(name) {
  let obj = JSON.parse(localStorage.getItem('bookmark'));
  for (let i = 0; i < obj.length; i++) {
    if (obj[i]['name'] == name) {
      obj.splice(i, 1);
      break;
    }
  }
  localStorage.setItem('bookmark', JSON.stringify(obj));
  location.reload();
}