export namespace models {
	
	export class HttpResponse {
	    status: string;
	    statusCode: number;
	    headers: Record<string, string[]>;
	    body: string;
	    contentLength: number;
	    latency: number;
	    error: string;
	
	    static createFrom(source: any = {}) {
	        return new HttpResponse(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.status = source["status"];
	        this.statusCode = source["statusCode"];
	        this.headers = source["headers"];
	        this.body = source["body"];
	        this.contentLength = source["contentLength"];
	        this.latency = source["latency"];
	        this.error = source["error"];
	    }
	}

}

