function getFormvalue() {
    //Write your code here
	event.preventDefault();
	const Form = document.getElementById("form1");
	const Fname = Form.fname.value;
	const Lname = Form.lname.value;
	alert(Fname+" "+Lname);
}
