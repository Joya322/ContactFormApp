import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
  Alert
} from "react-native";

const Card = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [isPrimary, setIsPrimary] = useState(true);

  // Validate whenever inputs change
  useEffect(() => {
    // Name validation
    if (!name.trim()) {
      setNameError("required");
    } else {
      setNameError("");
    }

    // Email validation
    if (!email.trim()) {
      setEmailError("required");
    } else if (!email.includes("@")) {
      setEmailError("Invalid email");
    } else {
      setEmailError("");
    }

    // Message validation
    if (!message.trim()) {
      setMessageError("required");
    } else if (message.length < 10) {
      setMessageError("Message must be at least 10 characters length");
    } else {
      setMessageError("");
    }

    // Disable submit if any error
    const hasError =
      !name.trim() ||
      !email.trim() ||
      !email.includes("@") ||
      !message.trim() ||
      message.length < 10;

    setIsDisabled(hasError);
  }, [name, email, message]);

  const handleSubmit = () => {
    setIsPrimary(false);
    setTimeout(() => {
      setName("");
      setEmail("");
      setMessage("");
    }, 2000);
    Alert.alert("Message sent!");
  };

  return (
    <View style={styles.cardContainer}>
      <Text style={styles.inputLabel}>Name:</Text>
      <TextInput
        placeholder="Your name"
        value={name}
        onChangeText={setName}
        style={styles.textInput}
      />
      <Text style={styles.errorText}>{nameError}</Text>

      <Text style={styles.inputLabel}>Email:</Text>
      <TextInput
        placeholder="Your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={styles.textInput}
      />
      <Text style={styles.errorText}>{emailError}</Text>

      <Text style={styles.inputLabel}>Write a message:</Text>
      <TextInput
        placeholder="Write a message"
        value={message}
        onChangeText={setMessage}
        multiline
        style={[styles.textInput, { height: 70 }]}
      />
      <Text style={styles.errorText}>{messageError}</Text>

      <TouchableOpacity
        style={[
          styles.submitButton,
          isDisabled && styles.disabled,
          !isDisabled && !isPrimary && styles.secondary,
        ]}
        onPress={handleSubmit}
        disabled={isDisabled}
      >
        <Text
          style={[
            styles.buttonText,
            !isDisabled && !isPrimary && styles.secondaryText,
          ]}
        >
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 350,
    padding: 20,
    borderWidth: 0,
    borderRadius: 8,
    // backgroundColor: "lightblue",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },

  textInput: {
    borderWidth: 1,
    borderColor: "black",
    padding: 15,
    borderRadius: 8,
    width: "90%",
    marginBottom: 5,
  },

  inputLabel: {
    fontSize: 18,
    fontWeight: 500,
    marginBottom: 5,
  },

  submitButton: {
    marginTop: 10,
    padding: 12,
    borderRadius: 8,
    width: "30%",
    alignSelf: "center",
    backgroundColor: "#007bff",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 20,
    color: "white",
  },
  errorText: {
    color: "red",
    fontSize: 14,
    marginBottom: 5,
    minHeight: 20,
  },
  disabled: {
    opacity: 0.4,
  },
  secondary: {
    backgroundColor: "transparent",
    borderColor: "#007bff",
    borderWidth: 1,
  },
  secondaryText: {
    color: "#007bff",
  },
});

export default Card;
