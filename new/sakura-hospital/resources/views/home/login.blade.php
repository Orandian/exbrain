<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Login</title>

    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <!-- JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous">
    </script>
</head>

<body>
    <section class="vh-100" style="background-color: #508bfc;">
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div class="card shadow-2-strong" style="border-radius: 1rem;">
                        <div class="card-body p-5 text-center">

                            <h3 class="mb-5">{{ __('message.sakura hospital') }}</h3>

                            <form action="./loginCheck" method="post">
                                @csrf
                                <div class="form-outline mb-4">
                                    @error('email')
                                        <p class="text-danger">{{ $message }}</p>
                                    @enderror
                                    <input type="text" class="form-control form-control-lg" name="email"
                                        placeholder={{ __('message.email') }} value="{{ old('email') }}" />
                                </div>

                                <div class="form-outline mb-4">
                                    @error('password')
                                        <p class="text-danger">{{ $message }}</p>
                                    @enderror
                                    <input type="password" class="form-control form-control-lg" name="password"
                                        placeholder={{ __('message.password') }} value="{{ old('password') }}" />
                                </div>

                                <button class="btn btn-primary btn-lg btn-block"
                                    type="submit">{{ __('message.login') }}</button>
                            </form>

                            <hr class="my-4">

                            <div class="btn-group">
                                <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    {{ __('message.language') }}
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="/lang/en">{{ __('message.english') }}</a></li>
                                    <li><a class="dropdown-item" href="/lang/mm">{{ __('message.myanmar') }}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</body>

</html>
