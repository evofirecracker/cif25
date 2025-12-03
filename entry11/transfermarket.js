document.addEventListener('DOMContentLoaded', () => {
  const walletEl = document.querySelector('.walletamount11');
  const basketEl = document.querySelector('.basketcontainer');
  const totalEl = document.querySelector('.totalamount11');
  const addButtons = Array.from(document.querySelectorAll('.btn11'));
  const clearBtn = document.querySelector('.clearbtn11');

  if (!walletEl || !basketEl || !totalEl) return;

  const initialBalance = Number(walletEl.dataset.initial || walletEl.textContent.trim()) || 0;
  let balance = initialBalance;
  let total = 0;
  const selectedNames = new Set();

  const formatMoney = (num) => Math.max(0, Math.round(num)).toLocaleString('en-US');

  const updateDisplays = () => {
    walletEl.textContent = formatMoney(balance);
    totalEl.textContent = formatMoney(total);
  };

  const addToBasket = (name) => {
    const entry = document.createElement('p');
    entry.className = 'basket-entry';
    entry.textContent = name;
    basketEl.appendChild(entry);
  };

  addButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const name = btn.dataset.name || 'Player';
      const value = Number(btn.dataset.value || 0);
      if (value <= 0) return;
      if (balance < value) return;
      if (selectedNames.has(name)) return;

      balance -= value;
      total += value;
      selectedNames.add(name);
      addToBasket(name);
      updateDisplays();
    });
  });

  clearBtn?.addEventListener('click', () => {
    balance = initialBalance;
    total = 0;
    selectedNames.clear();
    // remove existing basket entries except the heading p (first child)
    const entries = basketEl.querySelectorAll('.basket-entry');
    entries.forEach((el) => el.remove());
    updateDisplays();
  });

  updateDisplays();
});
