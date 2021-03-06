// $(document).ready(function () {
//   fetch('http://localhost:3000/users')
//     .then((res) => res.json())
//     .then((data) => {
//       construction(data);
//     })
//     .catch((err) => console.log(err));
// });

// function construction(data) {
//   $('body').attr('style', `${data.body.style}`).append('<div></div>');
//   $('body div')
//     .attr('style', `${data.body.child[0].style}`)
//     .append('<div></div>');
//   $('body div div')
//     .attr('style', `${data.body.child[0].child[0].style}`)
//     .append('<img/>')
//     .after('<div></div>');
//   $('body div div img')
//     .attr('src', `${data.body.child[0].child[0].child[0].src}`)
//     .attr('style', `${data.body.child[0].child[0].child[0].style}`);
//   $('body div div + div')
//     .attr('style', `${data.body.child[0].child[1].style}`)
//     .append('<p></p>');
//   $('body div div + div p')
//     .attr('style', `${data.body.child[0].child[1].child[0].style}`)
//     .text(`${data.body.child[0].child[1].child[0].text}`)
//     .append('<span></span>')
//     .after('<p></p>');
//   $('body div div + div p span')
//     .attr('style', `${data.body.child[0].child[1].child[0].child[0].style}`)
//     .text(`${data.body.child[0].child[1].child[0].child[0].text}`);
//   $('body div div + div p + p')
//     .attr('style', `${data.body.child[0].child[1].child[1].style}`)
//     .text(`${data.body.child[0].child[1].child[1].text}`)
//     .append('<span></span>')
//     .after('<p></p>');
//   $('body div div + div p + p span')
//     .attr('style', `${data.body.child[0].child[1].child[1].child[0].style}`)
//     .text(`${data.body.child[0].child[1].child[1].child[0].text}`);
//   $('body div div + div p + p + p')
//     .attr('style', `${data.body.child[0].child[1].child[2].style}`)
//     .text(`${data.body.child[0].child[1].child[2].text}`)
//     .append('<span></span>');
//   $('body div div + div p + p + p span')
//     .attr('style', `${data.body.child[0].child[1].child[2].child[0].style}`)
//     .text(`${data.body.child[0].child[1].child[2].child[0].text}`);
// }

let html = '';

fetch('app.json')
  .then((res) => res.json())
  .then((data) => {
    let body = data.body;
    $('body').attr('style', body.style);
    childCreate(body.child);
    $('body').append(html);
  })
  .catch((err) => console.log(err));

let childCreate = (tags) => {
  for (const tag of tags) {
    html += `<${tag.element}`;
    if (tag.style != undefined) html += ` style="${tag.style}"`;
    if (tag.src != undefined) html += ` src="${tag.src}"`;
    if (tag.text != undefined) html += `>${tag.text}`;
    else html += `>`;
    if (tag.child != undefined) childCreate(tag.child);
    html += `</${tag.element}>`;
  }
};
