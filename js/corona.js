// http method ==> get/ post/ put/ delete ==> crud(create read put delete)

$.ajax({
    url: "http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson?ServiceKey=LT6VnxOUwUNb37cM174qWbxEd3Kew7Vt098vERT%2FocjVCJWNddkGe%2F4qlUUkSvOlD1SDOvf2ttKNShm906EFng%3D%3D",
    method: "get",
    success: function (res) {
        console.log("res", res);
    },
});
