import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, Text, Alert, ActivityIndicator, Button } from 'react-native';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

const NetworkIndex = () => {

    let GET_API = "http://192.168.1.8:3000/user";
    let GET_API2 = "https://jsonplaceholder.typicode.com/posts/1";

    var navigation = useNavigation();
    var [showResult, setShowResult] = useState<boolean>(false);
    var [result, setResult] = useState<String>("");
    const [data, setData] = useState([{}]);
    const [loading, setLoading] = useState(true);

    const items = [{
        title: 'GET - Fetch Example local', action: () => getUserList(), result: "Hello Fetch"
    },
    {
        title: 'Post - API call', action: () => addUser(), result: "Hello Axios"
    },
    {
        title: 'GET - API call', action: () => getCallTest(), result: "Hello Axios"
    }]


    useEffect(() => {
        console.log("Component did mount - API call here");
        const fetchData = async () => {
            try {
                const response = await fetch(GET_API); // Replace with your API endpoint
                const json = await response.json();
                console.log("Fetch API call result is ", json);
                setData(json); // Assuming the API returns an array directly
            } catch (error) {
                console.error(error);
            } finally {
               setLoading(false); // Hide loading indicator after fetch
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures it runs only once on mount

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
      }
      else{

    return (
        <View>
            {items.map((item, index) => (
                <View key={index} style={{ margin: 10 }}>
                    <Button title={item.title} onPress={item.action} />
                    {result && index == 0 && <View>
                        <Text>Fetch API call was successful!</Text>
                        <Text>{result}</Text>
                        <Text>-----------------------------------</Text>
                        <Text>JSON.stringify{items[index].result}</Text>
                    </View>}
                    {/* { result && <Text>Result Will be here</Text>} */}
                </View>
            ))}


            <Text>Your result will be display here</Text>

        </View>
    );
}

    function getCallTest() {
        setLoading(true);
        fetch(GET_API)
            .then((response) => response.json())
            .then((json) => {
                console.log("Fetch API call result is ", json);
                items[0].result = JSON.stringify(json);
                setResult(JSON.stringify(json))
                // Alert.alert("Fetch API call result is " + JSON.stringify(items[0]));
            })
            .catch((error) => {
                console.error(error);
            });
    }


    function getUserList() {
        fetch(GET_API)
            .then((response) => response.json())
            .then((json) => {
                console.log("Fetch API call result is ", json);
                setShowResult(true);
                items[0].result = JSON.stringify(json);
                setResult(JSON.stringify(json))
                // Alert.alert("Fetch API call result is " + JSON.stringify(json));
            })
            .catch((error) => {
                console.error(error);
            });
    }

    function addUser() {
        fetch(GET_API, {
            method: 'POST', 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {"dob":"1990-01-01","email":"s@s.com","password":"password123","username":"testashishasdassdiuser"}
            )
        })
            .then((response) => response.json())    
            .then((json) => {
                console.log("Fetch API call result is ", json);
                setShowResult(true);
                items[0].result = JSON.stringify(json);
                setResult(JSON.stringify(json))
                Alert.alert("Fetch API call result is " + JSON.stringify(json));
            })
            .catch((error) => {
                console.error(error);
            });
    }



}

export default NetworkIndex;

