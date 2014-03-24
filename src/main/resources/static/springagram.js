(function() {
    var name, bytes;
    var itemRepository = sdr.repositoriesFactory(null).itemRepository;

    function readImage(input) {
        if (input.files && input.files[0]) {
            var FR = new FileReader();
            FR.onloadend = function () {
                name = input.files[0].name;
                bytes = FR.result;
            }
            FR.readAsDataURL(input.files[0]);
        }
    }

    $('#file').change(function() {
        readImage(this);
    });

    $('#upload').submit(function(e) {
        e.preventDefault();
        itemRepository.create({
            name: name,
            image: bytes
        }).done(function () {
            window.location.reload();
        })
    });

//    $('button').onclick(function(e) {
//        var item = $(this);
//        e.preventDefault();
//        var path = "/items/" + item.value;
//        console.log("Deleting " + path);
//        itemRepository.delete(path);
//    })
})();