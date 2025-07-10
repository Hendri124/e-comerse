
fetch('/admin/checkout/history')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('checkout-list');
    data.data.forEach((cart, index) => {
      const div = document.createElement('div');
      div.innerHTML = `<h3>Pesanan #${index + 1}</h3><ul></ul>`;
      const ul = div.querySelector('ul');

      cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nama} - Rp${item.harga}`;
        ul.appendChild(li);
      });

      container.appendChild(div);
    });
  })
  .catch(err => console.error('Gagal ambil data checkout:', err));

