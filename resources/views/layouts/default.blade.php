<html>
    <head>
        <meta charset="UTF-8">
        <title>Krungsri Prime</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        
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

        {{-- script --}}
        @yield('custom_script')
    </body>
</html>