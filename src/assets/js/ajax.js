import axios from 'axios';
import $ from 'jquery';
export const axiosAjax = function(data){
    return new Promise(function(resolve,reject){
        
    });
}
export const jqueryAjax = function(url,data){
    return new Promise(function(resolve,reject){
        $.ajax({
            url:url,
            data:data,
            type:'GET',
            success(res){
                console.log('jquery-ajax-success',res);
                resolve(res);
            },
            error(err){
                console.log('jquery-ajax-error',err);
                reject(err);
            }
        });
    });
}