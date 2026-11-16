

const form = document.getElementById('sendmail');
console.log("form", form)

																
const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(form);
    
    try {
        const response = await fetch("https://formsubmit.co/solangemarceline86@gmail.com", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(Object.fromEntries(data.entries()))
        });

        if (!response.ok) {
            throw new Error(`FormSubmit request failed with status ${response.status}`);
        }

        const result = await response.json();
        if (result.success !== true && result.success !== 'true') {
            throw new Error(result.message || 'FormSubmit could not send the form');
        }
    } catch (e) {
        try {
            const response = await fetch("https://formbold.com/s/3Ngmg", {
                method: 'POST',
                body: data
            });

            if (!response.ok) {
                throw new Error(`FormBold fallback failed with status ${response.status}`);
            }
        } catch (fallbackError) {
            console.error('FormSubmit request failed:', e);
            console.error('FormBold fallback failed:', fallbackError);
            alert('Unable to send the form. Please try again later.');
            return;
        }
    }

    location.href = "thanks.html";
}	

form.addEventListener('submit', handleSubmit);




