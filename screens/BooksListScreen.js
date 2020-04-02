import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import {
  Image,
  Button,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function BooksListScreen() {
  const [books, set_books] = useState("");

  useEffect(() => {
    async function fetchData() {
      const httpResponse = await fetch(
        "https://www.googleapis.com/books/v1/volumes?q=quilting"
      );
      const data = await httpResponse.json();
      set_books(data);
    }

    fetchData();
  }, [set_books]);

  console.log("BOOKS", books ? "yes" : "no");

  return (
    <View style={styles.container}>
      {books ? (
        <FlatList
          data={books.items}
          renderItem={({ item }) => {
            return <BookListItem book={item} />;
          }}
          keyExtractor={item => item.id}
        />
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}

// Link on click -> go somewhere
// <Link to="/books/2">Go to book</Link>
// navigation.

function BookListItem({ book }) {
  const navigation = useNavigation();

  const { title, authors, description, imageLinks } = book.volumeInfo;

  const uri = imageLinks.thumbnail;

  // A host component that allows the `onPress` prop
  // ?

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Book", {
          book: {
            title,
            authors,
            description,
            imageLinks
          }
        });
      }}
    >
      <BookListItemBox>
        <Image source={{ uri }} style={styles.image} />
        <Text style={styles.bookTitle}>{title}</Text>
        {authors ? (
          <Text style={styles.authors}>
            Authors:{" "}
            {authors.map(author => {
              return <Text>{author}</Text>;
            })}
          </Text>
        ) : (
          <Text style={styles.authors}>This book wrote itself</Text>
        )}
        <Text>
          {description.length > 100
            ? description.slice(0, 100) + "..."
            : description}
        </Text>
        {/* <Button
        title="Go to book"
        onPress={() => {
          navigation.navigate("Settings");
        }}
      /> */}
      </BookListItemBox>
    </TouchableOpacity>
  );
}

const BookListItemBox = styled.View`
  margin: 0 10px 40px;
`;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 100
  },
  authors: {
    marginVertical: 5,
    fontStyle: "italic",
    color: "#666"
  },
  bookTitle: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 20
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
