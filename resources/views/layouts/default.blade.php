<html>
    <head>
        <meta charset="UTF-8">
        <title>Krungsri Prime</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        <link rel="stylesheet" href={{ asset('/css/owl.carousel.min.css') }}>
        <link rel="stylesheet" href={{ asset('/css/owl.theme.default.min.css') }}>
        <link rel="stylesheet" href={{ asset('/css/owl.theme.green.min.css') }}>
        <link rel="stylesheet" href={{ asset('/css/animate.css') }}>
        <link rel="stylesheet" href={{ asset('/css/aos.css') }}>

        {{-- custom header --}}
        @yield('custom_head')
    </head>
    <body>

        {{-- navbar --}}
        @include('utils.navbar')

        {{-- content --}}
        @yield('content')

        {{-- footer --}}
        @include('utils.footer')

        <script src={{ asset('/js/jquery-3.2.1.min.js') }}></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
        <script src={{ asset('/js/owl.carousel.js') }} ></script>
        <script src={{ asset('/js/owl.autoplay.js') }} ></script>
        <script src={{ asset('/js/owl.animate.js') }} ></script>
        <script src={{ asset('/js/aos.js') }}></script>
        
        {{-- script --}}
        @yield('custom_script')
    </body>
</html>