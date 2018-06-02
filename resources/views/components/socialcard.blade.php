<section id="card">
    <div class="container">
        <div class="row marginTop20">
            @for($i = 1; $i <= 8; $i++)
                @if($i > 6)
                    <div class="col-md-4"></div>
                    <div class="col-md-4 text-center">
                        <p>..LOAD MORE..</p>
                    </div>
                    @break
                @else
                    <div class="col-4">
                        <div class="row">
                            <div class="col-12">
                                <img src={{ asset('/imgs/people1.png') }} alt="social blog">
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
    </div>
</section>