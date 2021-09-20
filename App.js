import Test from './components/Test'


function App() {
  return(
      <div>
        <Test 
              question="Q: Who is the founder of Pakistan?"
              option1="Quaid-e-Azam"
              option2="Alama Iqbal"
              option3="Shakespere"
              option4="Imran Khan"  
        />
        <Test 
              question="Q: What is Brexit?"
              option1="A sea name"
              option2="An Animal Name"
              option3="UK widhdrawal from Euripean Union"
              option4="US Policy for Afghanistan" 
        />
        <Test 
              question="Q: How Many Provinces in Pakistan?"
              option1="5"
              option2="4"
              option3="3"
              option4="10"  
        />
        <Test 
              question="Q: Which are the search engines from the below options"
              option1="google"
              option2="facebook"
              option3="Bing"
              option4="Ask.com"
              option5="A,B and D"  
        />
        <Test 
              question="Q: Which one is the cryptocurrency?"
              option1="Dollar"
              option2="Bitcoin"
              option3="Dinar"
        />
      </div>
    )
}

export default App;
