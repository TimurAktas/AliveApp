<template>
<Page actionBarHidden="false" backgroundColor="#2A3551" >    
     <StackLayout class="p-20">
            <StackLayout class="input-field">
                <RadAutoCompleteTextView class="radAuto" :items="autocompleteCountries"
                    suggestMode="Suggest" displayMode="Tokens">
                    <SuggestionView ~suggestionView>
                        <StackLayout v-suggestionItemTemplate orientation="vertical">
                            <v-template scope="item">
                                <GridLayout columns="auto, *">
                                    <Image height="40" col="0" src="~/assets/images/defaultpicture.png" />
                                    <Label col="1" :text="item.text" class="p-l-5" />
                                </GridLayout>
                            </v-template>
                        </StackLayout>
                    </SuggestionView>
                </RadAutoCompleteTextView>
                <StackLayout class="hr-light"></StackLayout>
                <Label  class="label m-b-5" >{{userData.subscriber}} </Label>
            </StackLayout>
        </StackLayout>
    </Page>
</template>

<script>
    import * as firebase from "nativescript-plugin-firebase"
    import * as firestore from "nativescript-plugin-firebase/app"
    import { mapGetters } from 'vuex'

    const autocompleteModule = require("nativescript-ui-autocomplete");
    const ObservableArray = require("tns-core-modules/data/observable-array").ObservableArray;
    
    const countries = [
        "Albania",
        "Andorra",
        "Australia",
        "Belgium",
        "Bulgaria",
        "Cyprus",
        "Denmark",
        "Finland",
        "France",
        "Germany",
        "Greece",
        "Hungary",
        "Ireland",
        "Italy",
        "Japan",
        "Latvia",
        "Luxembourg",
        "Macedonia",
        "Moldova",
        "Monaco",
        "Netherlands",
        "Norway",
        "Poland",
        "Romania",
        "Russia",
        "Slovakia",
        "Slovenia",
        "Sweden",
        "Turkey",
        "Ukraine",
        "USA",
        "Timur"
    ];

    const autocompleteCountries = new ObservableArray();
    countries.forEach(country => {
        autocompleteCountries.push(
            new autocompleteModule.TokenModel(country, undefined)
        );
    });
    autocompleteCountries.showCloseButton = false;
    export default {
        data() {
            return {
                autocompleteCountries: autocompleteCountries,
                Follower: [],
            };
        },
        methods:{
          
        },
        computed: {
            ...mapGetters(['userData'])
        }
    };
</script>

<style scoped>
    .home-panel {
        vertical-align: center;
        font-size: 20;
        margin: 15;
    }

    .description-label {
        margin-bottom: 15;
    }
    .radAuto{

    }

    
</style>