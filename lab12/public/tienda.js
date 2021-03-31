function total(){
    var rmq = document.getElementById("rm").value;
    var bes = document.getElementById("be").value;
    var cdt = document.getElementById("ct").value;
    var rmtot = rmq*5000;
    var bestot = bes*3500;
    var cdtot = cdt*7200;
    var tot = document.getElementById("total");
    sum = rmtot+bestot+cdtot;
    tot.innerHTML = "<h2> Total : " + sum + "$</h2>";
}