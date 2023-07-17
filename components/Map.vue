<template>
    <div>
        <div class="rounded-lg overflow-hidden mt-5">
        <yandex-map :coords="coords" class="rounded-lg h-64" :zoom="16" @click="getLongLat">
            <ymap-marker :coords="coords" marker-id="123" hint-content="some hint" />
        </yandex-map>
    </div>
    <div class="w-full flex justify-between pt-5">
        <input placeholder="Широта" v-model="latitude" type="number"
            class="w-[220px] h-[50px] rounded-md border border-slate-300 pl-2 mb-4 focus:outline-none" />
        <input placeholder="Долгота" v-model="longitude" type="number"
            class="w-[220px] h-[50px] rounded-md border border-slate-300 pl-2 mb-4 focus:outline-none" />
    </div>
    </div>

</template>

<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps'
export default {
    name: 'oficePop',
    components: {
        yandexMap, ymapMarker
    },
    data() {
        return {
            latitude:"",
            longitude:"",
            // MAP - This is the custom coordinates for yandexMap and ymapMarker usage
            coords: [
                38.562783195965345,
                68.809349541773434,
            ],
        };
    },
   
    methods: {
        // MAP - This will get the longitude and latitude and pass to its fields in the form
        getLongLat(e) {
            this.coords = e.get('coords');
            this.latitude = this.coords[0];
            this.longitude = this.coords[1];
        },
        // Saving the form data
    },
};
</script>