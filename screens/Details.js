export const Details = ({ route }) => {
    const { name, id } = route.params;
  
    // You can use the name and id to fetch more details about the Pokémon
    // or display the information as needed
  
    return (
      <View>
        <Text>Pokémon Name: {name}</Text>
        <Text>Pokémon ID: {id}</Text>
        {/* Display more details or components as needed */}
      </View>
    );
  };