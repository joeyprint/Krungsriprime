<section id="card" class="marginTop40">
    <div class="container">
        <div class="row justify-content-center marginTop20">
            @for($i = 1; $i <= 8; $i++)
                @if($i > 6)
                    @break
                @else
                    <div class="col-12 col-sm-6 col-lg-4">
                        <div class="row">
                            <div class="col-12">
                                <img src={{ asset('/imgs/people1.png') }} alt="social blog" width="100%">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <p class="whitebg black-text padding10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                            </div>
                        </div>
                    </div>
                @endif
            @endfor
        </div>
        <div class="row justify-content-center marginTop20">
            <div class="col-12 col-sm-6 col-lg-2 text-center">
                <p class="btn-load padding10 load-text">..LOAD MORE..</p>
            </div>
        </div>
    </div>
</section>