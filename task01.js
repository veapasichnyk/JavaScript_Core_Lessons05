function makeBuffer()
{
	let bufferValue = ''
	
	return {
		getNext : function() {
			bufferValue++
		},
		
		add: function (value) {
            if (isNaN(value))
            bufferValue += value + " ";
            else
            bufferValue += value;
        },
		
		print : function(){
			return bufferValue
		},
		
		clear : function(){
			bufferValue = ''
		}
	}
}

let buffer = makeBuffer();

buffer.add( 'JavaScript');
buffer.add( 'вчити');
buffer.add( 'потрібно!');
console.log(buffer.print());

buffer.add(0);
buffer.add(1);
buffer.add(0);
console.log (buffer.print());

buffer.add(" Тест");
buffer.add("тебе не з'їсть");
console.log(buffer.print());
buffer.clear ();
console.log(buffer.print());