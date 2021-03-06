export class Actividad {

    constructor(public actividad: string,
        public responsable: any,
        public clasificacion: any,
        public proceso: any,
        public tarea: any,
        public tipoValidacion: string,
        public observaciones: string,
        public adjunto: any,
        public id?: number) { }

    public static fromJson(element: any) {
        return new Actividad(element.Title,
            element.Responsable,
            element.Clasificacion,
            element.Proceso,
            element.Tarea,
            element.TipoValidacion,
            element.Observaciones,
            (element.AttachmentFiles != null && element.AttachmentFiles.length > 0) ? element.AttachmentFiles[0].ServerRelativeUrl : null,
            element.Id)
    }

    public static fromJsonList(elements: any) {
        var list = [];
        for (var i = 0; i < elements.length; i++) {
            list.push(this.fromJson(elements[i]));
        }
        return list;
    }

}