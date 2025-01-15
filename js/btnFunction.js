
// Donation Button
document.getElementById('donationBtn').addEventListener('click', function(event){
    event.preventDefault();

    // Change the button color
    document.getElementById('donationBtn').classList.add('bg-[#B4F461]');
    document.getElementById('historyBtn').classList.remove('bg-[#B4F461]');

    // Make history details hidden and show cards
    document.getElementById('cards').classList.remove('hidden');
    document.getElementById('history').classList.add('hidden');
})


// History Button
document.getElementById('historyBtn').addEventListener('click', function(event){
    event.preventDefault();

    // Change the button color
    document.getElementById('historyBtn').classList.add('bg-[#B4F461]');
    document.getElementById('donationBtn').classList.remove('bg-[#B4F461]');

    // Make cards hidden and show history
    document.getElementById('cards').classList.add('hidden');
    document.getElementById('history').classList.remove('hidden');
})