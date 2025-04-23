export namespace models {
	
	export class HttpResponse {
	    StatusCode: number;
	    Body: string;
	    Latency: number;
	
	    static createFrom(source: any = {}) {
	        return new HttpResponse(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.StatusCode = source["StatusCode"];
	        this.Body = source["Body"];
	        this.Latency = source["Latency"];
	    }
	}

}

