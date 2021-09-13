/**
 * 
 */


function ChangeEstado() {
	if ($("#IdEstado").val() != "") {
		// document.getElementById("endereco").style.visibility = "visible";
		if ($("#IdEstado").val() == "es") {
			document.getElementById("endereco").innerHTML = "<table style='text-align:center'> <th><p style='font-weight: bold'>VITÓRIA - ES</p> </th> "
					+ "<table style='text-align:left;'><tr><td style='font-weight: bold'>Telefone:</td><td> (27) 3314-1141 </td></tr>"
					+ "<tr><td style='font-weight: bold'>Endereço:</td>"
					+ "<td>Av. Des. José Batalha, 90 sala 100 </td></tr><tr><td></td>"
					+ "<td>Ed. Itália - Consolação </td></tr><tr><td></td>"
					+ "<td>CEP 29045-530 </td></tr><tr><td></td></tr></table></table></table></br>";
		} else if ($("#IdEstado").val() == "sp") {
			document.getElementById("endereco").innerHTML = "<table style='text-align:center'> <th><p style='font-weight: bold'>SÃO PAULO - SP </p> </th>"
					+ "<table style='text-align:left;'><tr><td style='font-weight: bold'>Telefone:</td><td> (11) 2935-5159 </td></tr>"
					+ "<tr><td style='font-weight: bold'>Endereço:</td>"
					+ "<td>Alameda Joaquim Eugênio de Lima, Nº 598.</td></tr><tr><td></td>"
					+ "<td>Sala 63 – CENTRO JARDIM PAULISTA</td></tr><tr><td></td>"
					+ "<td>CEP 01403-000 </td>"
					+ "</tr><tr><td></td></tr></table></table></table></br>"
					+ "<table style='text-align:center'> <th><p style='font-weight: bold'>CAMPINAS - SP</p> </th>"
					+ "<table style='text-align:left;'><tr><td style='font-weight: bold'>Telefone: </td><td> (19) 3307-3259 </td></tr>"
					+ "<tr><td style='font-weight: bold'>Endereço:</td>"
					+ "<td>Rua Luverci Pereira de Souza 845 </td></tr><tr><td></td> "
					+ "<td>Cidade Universitária</td></tr><tr><td></td>"
					+ "<td>CEP 13083-730</td></tr><tr><td></td>"
					+ "</tr></table></table></table></br>";
		} else if ($("#IdEstado").val() == "pi") {
			document.getElementById("endereco").innerHTML = "<table style='text-align:center'> <th><p style='font-weight: bold'>TERESINA - PI </p> </th>"
					+ "<tr><td style='font-weight: bold'>Endereço:</td>"
					+ "<td>Av. Raul Lopes, n. 1905</td></tr><tr><td></td>"
					+ "<td>Condomínio Villa Meditârraneo / Ed. Corinto - AP.: 903</td></tr><tr><td></td>"
					+ "<td>Bairro de Fátima Teresina - PI</td></tr><tr><td></td>"
					+ "<td>CEP: 64000-000</td></tr><tr><td></td>"
					+ "</tr></table></table></table></br>";
		} else if ($("#IdEstado").val() == "ma") {
			document.getElementById("endereco").innerHTML = "<table style='text-align:center'> <th><p style='font-weight: bold'>SÃO LUÍS - MA</p> </th>"
					+ "<table style='text-align:left;'><tr><td style='font-weight: bold'>Telefone: </td><td> (98) 3227-1260 </td></tr>"
					+ "<tr><td style='font-weight: bold'>Endereço:</td>"
					+ "<td>Rua das Caravelas, No 40, Quadra 09, Bairro Calhau</td></tr><tr><td></td>"
					+ "<td>CEP 65071-730</td></tr><tr><td></td>"
					+ "</tr></table></table></table></br>";
		} else if ($("#IdEstado").val() == "ce") {
			document.getElementById("endereco").innerHTML = "<table style='text-align:center'> <th><p style='font-weight: bold'>FORTALEZA - CE</p> </th>"
					+ "<table style='text-align:left;'><tr><td style='font-weight: bold'>Telefone: </td><td> (85) 8814-0065 </td></tr>"
					+ "<tr><td style='font-weight: bold'>Endereço:</td>"
					+ "<td>Av. Dom Luís, 500, bairro Meireles</td></tr><tr><td></td>"
					+ "<td>Shopping Aldeota Expansão, Business Center, sala 1528</td></tr><tr><td></td>"
					+ "<td>CEP 60160-230</td></tr><tr><td></td>"
					+ "</tr></table></table></table></br>";
		} else if ($("#IdEstado").val() == "sc") {
			document.getElementById("endereco").innerHTML = "<table style='text-align:center'> <th><p style='font-weight: bold'>FLORIANÓPOLIS – SC</p> </th>"
					+ "<table style='text-align:left;'><tr><td style='font-weight: bold'>Telefone: </td><td>  48 3024.6137 </td></tr>"
					+ "<tr><td style='font-weight: bold'>Endereço:</td>"
					+ "<td>Centro</td></tr><tr><td></td>"
					+ "<td>CEP 88010-090</td></tr><tr><td></td>"
					+ "</tr></table></table></table></br>";
		} else if ($("#IdEstado").val() == "df") {
			document.getElementById("endereco").innerHTML = "<table style='text-align:center'> <th><p style='font-weight: bold'>BRASÍLIA – DF</p> </th>"
					+ "<table style='text-align:left;'><tr><td style='font-weight: bold'>Telefone: </td><td> 61 3201.5667 </td></tr>"
					+ "<tr><td style='font-weight: bold'>Endereço:</td>"
					+ "<td>SCN – Setor comercial norte, Quadra 2</td></tr><tr><td></td>"
					+ "<td>Ed. Liberty Mall, torre B, Sala 732</td></tr><tr><td></td>"
					+ "<td>CEP 70712-904</td></tr><tr><td></td>"
					+ "</tr></table></table></table></br>";
		} else if ($("#IdEstado").val() == "rr") {
			document.getElementById("endereco").innerHTML = "<table style='text-align:center'> <th><p style='font-weight: bold'>BOA VISTA – RR</p> </th>"
					+ "<table style='text-align:left;'><tr><td style='font-weight: bold'>Telefone: </td><td> 95 2121.9050 </td></tr>"
					+ "<tr><td style='font-weight: bold'>Endereço:</td>"
					+ "<td>Praça do Centro Cívico, 466</td></tr><tr><td></td>"
					+ "<td>Centro - CEP 69301-380</td></tr><tr><td></td>"
					+ "</tr></table></table></table></br>";
		} else if ($("#IdEstado").val() == "rs") {
			document.getElementById("endereco").innerHTML = "<table style='text-align:center'> <th><p style='font-weight: bold'>PORTO ALEGRE – RS</p> </th>"
					+ "<table style='text-align:left;'><tr><td style='font-weight: bold'>Telefone: </td><td> 51 3224.1320 </td></tr>"
					+ "<tr><td style='font-weight: bold'>Endereço:</td>"
					+ "<td>Av. Alberto Bins, 325 – sala 29</td></tr><tr><td></td>"
					+ "<td>Centro - CEP 90030-142</td></tr><tr><td></td>"
					+ "</tr></table></table></table></br>";
		} else if ($("#IdEstado").val() == "pa") {
			document.getElementById("endereco").innerHTML = "<table style='text-align:center'> <th><p style='font-weight: bold'>BELÉM – PA</p> </th>"
					+ "<table style='text-align:left;'><tr><td style='font-weight: bold'>Telefone: </td><td> 91 3223.0619 </td></tr>"
					+ "<tr><td style='font-weight: bold'>Endereço:</td>"
					+ "<td>Av. Assis Vasconcelos, 265 - 3º andar</td></tr><tr><td></td>"
					+ "<td>Edifício Victor VI</td></tr><tr><td></td>"
					+ "<td>CEP 66010-010</td></tr><tr><td></td>"
					+ "</tr></table></table></table></br>";
		} else if ($("#IdEstado").val() == "se") {
			document.getElementById("endereco").innerHTML = "<table style='text-align:center'> <th><p style='font-weight: bold'>ARACAJU - SE </p> </th>"
					+ "<table style='text-align:left;'><tr><td style='font-weight: bold'>Telefone: </td><td> 79 3223.2144 </td></tr>"
					+ "<tr><td style='font-weight: bold'>Endereço:</td>"
					+ "<td>Av. Murilo Dantas, 881</td></tr><tr><td></td>"
					+ "<td>Galeria Farol Center, Sala 8</td></tr><tr><td></td>"
					+ "<td>Bairro: Farolândia - CEP 49.032-490</td></tr><tr><td></td>"
					+ "</tr></table></table></table></br>";
		} else if ($("#IdEstado").val() == "mg") {
			document.getElementById("endereco").innerHTML = "<table style='text-align:center'> <th><p style='font-weight: bold'>BELO HORIZONTE – MG</p> </th>"
					+ "<table style='text-align:left;'><tr><td style='font-weight: bold'>Telefone: </td><td> 31 3505.1940 </td></tr>"
					+ "<tr><td style='font-weight: bold'>Endereço:</td>"
					+ "<td>Alameda da Serra, 891 – sala 708 </td></tr><tr><td></td>"
					+ "<td>Vila da Serra – CEP 34000-000</td>"
					+ "</tr></table></table></table></br>";
		}
	}
}
