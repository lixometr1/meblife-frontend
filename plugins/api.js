import Api from "@/api/api"
import ApiRoutes from "@/api/api_routes"
export default ({ app, $axios }, inject) => {
    inject('api', new Api(ApiRoutes(), $axios, {
        lang: app.i18n.locale
    }))
}