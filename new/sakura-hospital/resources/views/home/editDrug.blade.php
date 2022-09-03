@extends('layout.app')

@section('title', 'Add Drug')

@section('body')
    <div class="uk-container uk-container-small">
        <div class="uk-card uk-card-default uk-card-body uk-margin-medium-top">
            <h1 class="uk-heading-bullet">{{ __('message.add to drug inventory') }}</h1>
            <hr class="uk-divider-icon" />
            <form action="{{ route('drug.update', $drugInfo->id) }}" method="POST">
                @csrf
                @method('PUT')
                <label class="uk-text-bold">{{ __('message.drug name') }}</label>
                <div class="uk-margin-small-top uk-margin-small-bottom">
                    <input id="dName" class="uk-input uk-width-1-2" type="text" placeholder="Input the drug name"
                        name="drug_name" value="{{ $drugInfo->drug_name }}" />
                </div>
                <label class="uk-text-bold">{{ __('message.unit of measure') }}</label>
                <div class="uk-margin-small-top uk-margin-small-bottom">
                    <input id="dUnit" class="uk-input uk-form-width-small" type="text" placeholder="100 g"
                        name="amount" value="{{ $drugInfo->amount }}" />
                </div>
                <label class="uk-text-bold">{{ __('message.stock amount') }}</label>
                <div class="uk-margin-small-top uk-margin-small-bottom">
                    <input id="dStock" class="uk-input uk-form-width-small" type="number" placeholder="100"
                        name="cost" value="{{ $drugInfo->cost }}" />
                </div>
                <label class="uk-text-bold">{{ __('message.unit price') }}</label>
                <div class="uk-margin-small-top uk-margin-medium-bottom">
                    <input id="dPrice" class="uk-input uk-form-width-small" type="number" placeholder="$10"
                        name="quatity" value="{{ $drugInfo->quatity }}" />
                </div>
                <div>
                    <button type="submit" id="btnSave"
                        class="uk-button uk-button-primary">{{ __('message.save') }}</button>
                </div>
            </form>
        </div>
    </div>
@endsection
