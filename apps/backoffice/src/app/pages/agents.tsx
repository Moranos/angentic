import { useState } from "react"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"

export function Agents() {
  const [result, setResult] = useState<string>("")
  const [loading, setLoading] = useState(false)

  const testAgents = async () => {
    setLoading(true)
    try {
      const response = await fetch("http://localhost:3000")
      const data = await response.json()
      setResult(JSON.stringify(data, null, 2))
    } catch (error: any) {
      setResult(`Error: ${error?.message || 'Unknown error'}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Agents Test</h2>
        <p className="text-muted-foreground">
          Test the agents endpoint from the scraper service
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Test Agents</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button 
            onClick={testAgents} 
            disabled={loading}
          >
            {loading ? "Loading..." : "Test Agents"}
          </Button>
          
          {result && (
            <pre className="p-4 bg-muted rounded-lg overflow-auto">
              {result}
            </pre>
          )}
        </CardContent>
      </Card>
    </div>
  )
} 