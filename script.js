const Modal = {
    open(){
        document
            .querySelector('.modal-overlay')
            .classList.add('active')
    },
    close(){
        document
            .querySelector('.modal-overlay')
            .classList.remove('active')
    }
}
//toggle

const transactions = [
    {
        id: 1,
        description: 'Luz',
        amount: -50000, //-500
        date: '23/01/2021'
    }, 
    {
        id: 2,
        description: 'Website',
        amount: -5000000, //-5000
        date: '23/01/2021'
    },
    {
        id: 3,
        description: 'Internet',
        amount: -20000, //-200
        date: '23/01/2021'
    }
]

const Transaction = {
    incomes() {
        //somar as entradas
    },
    expenses() {
        //somar as saidas
    },
    total() {
        //entradas - saidas
    }
}

const DOM = {
    transactionsContainer : document.querySelector('#data-table tbody'),
    addTransaction(transaction, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)

        DOM.transactionsContainer.appendChild(tr)
    },

    innerHTMLTransaction(transaction) {
        const html = `
        
            <td class="description">${transaction.description}</td>
            <td class="expense">${transaction.amount}</td>
            <td class="date">${transaction.date}</td>
            <td>
                <img src="./assets/minus.svg" alt="remover transacion">
            </td>
        
        `
        return html
    }
}


transactions.forEach(function(transaction) {
    DOM.addTransaction(transaction)
})