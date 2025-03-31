
import { Alert} from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';


  const handlePayment = (totalPrice, clearCart) => {

    const amount = Math.round(totalPrice * 100);
    const options = {
      description : "Payment for your Order",
      image: "https://example.com/logo.png",
      currency: "INR",
      key: "rzp_test_YOsEoZmoJSx09Z",
      amount: amount.toString(),
      name: "Customer",
      prefill : {
        email: "Shreelaxmi.20cs078@sode-edu.in",
        contact: "7676399577",
        name: "Shreelaxmi",
      },
      theme: {color: "#F37254"},
    };

    RazorpayCheckout.open(options)
      .then((data) => {
        Alert.alert(`Success: ${data.razorpay_payment_id}`);
        clearCart();
      })
      .catch((error) => {
        Alert.alert(`Error: ${error.code} | ${error.description}`);
      });
  };

 

export default handlePayment;
