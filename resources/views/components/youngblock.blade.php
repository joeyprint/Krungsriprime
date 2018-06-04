<section id="youngblock">
    <div class="container-fluid d-block d-md-none">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                @for($i = 1; $i <= 7 ; $i++)
                    @if($i == 1)
                        <div class="carousel-item active">
                            <img class="" src={{ asset('/imgs/people'.$i.'.png') }} alt={{ 'People '.$i }} width="100%">
                        </div>
                    @else
                        <div class="carousel-item">
                            <img class="" src={{ asset('/imgs/people'.$i.'.png') }} alt={{ 'People '.$i }} width="100%">
                        </div>
                    @endif
                @endfor
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
    <div class="container d-none d-md-block marginTop100">
        <div class="row justify-content-center">
            @for($i = 1; $i <= 7 ; $i++)
                @if(($i%3)-1 == 1 || $i == 7)
                    <div class="col-4 marginTop15 column2-position">
                        <img class="block-shadow" src={{ asset('/imgs/people'.$i.'.png') }} alt="people 1">                        
                    </div>
                @else
                    <div class="col-4 marginTop15">
                        <img class="block-shadow" src={{ asset('/imgs/people'.$i.'.png') }} alt="people 1">
                    </div>
                @endif
            @endfor
        </div>
    </div>
</section>