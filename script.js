// Function Search
document.getElementById('searchInput').addEventListener('input', function() {
    var input = document.getElementById('searchInput').value.toLowerCase();
    var rows = document.querySelectorAll('#areaTable tbody tr');

    rows.forEach(function(row) {
        var cells = row.querySelectorAll('td');
        var provinsi = cells[0].textContent.toLowerCase();
        var kota = cells[1].textContent.toLowerCase();
        var area = cells[2].textContent.toLowerCase();

        if (provinsi.indexOf(input) > -1 || kota.indexOf(input) > -1 || area.indexOf(input) > -1) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});
// Function Order
function orderPackage(packageId) {
   
    document.getElementById('orderDialog').style.display = 'flex';

    
    document.getElementById('submitOrder').addEventListener('click', function() {
        var phoneNumber = document.getElementById('phoneNumber').value;

        
        if (phoneNumber) {
            var packageName = document.querySelectorAll('.paket-card')[packageId - 1].querySelector('h3').textContent;
            var message = `Order "${packageName}"\nNomor: ${phoneNumber}`;
            
            
            var whatsappLink = `https://wa.me/6287886803419?text=${encodeURIComponent(message)}`;
            window.open(whatsappLink, '_blank');
            
            
            document.getElementById('orderDialog').style.display = 'none';
        } else {
            alert("Mohon masukkan nomor HP.");
        }
    });

    
    document.getElementById('closeDialog').addEventListener('click', function() {
        document.getElementById('orderDialog').style.display = 'none';
    });
}
